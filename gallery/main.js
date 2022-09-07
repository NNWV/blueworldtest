const APP_ID = "332af2bbdcde4183a1317e9e71f6e5ef"
const TOKEN ="007eJxTYEi7mNf9+gPvGZMkN91lyQt582d13TJLWLHWV6FLfqOUVagCg7GxUWKaUVJSSnJKqomhhXGiobGheaplqrlhmlmqaWqafLx48vwNEslCRtNYGBkgEMRnYShJLS5hYAAAD5QfLQ=="
const CHANNEL ="test"

const client = AgoraRTC.createClient({mode:'rtc', codec:'vp8'})

let localTracks = null
let remoteUsers = {}

let joinAudioStream = async () => {

	client.on('user-published', handleUserJoined)
	// client.on('user-left', handleUserLeft)

	let UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

	localTracks = await AgoraRTC.createMicrophoneAudioTrack({
		encoderConfig: {
    sampleRate: 48000,
    stereo: true,
    bitrate: 192,
  		},
	})

	let player = '<div class="audio-container" id="user-container-${UID}"><div class="audio-player" id="user-${UID}"></div></div>'

	document.getElementById('join-mic').insertAdjacentHTML('beforeend', player)

	// localTracks.play('user-${UID}')

	await client.publish([localTracks])
}

let joinStream = async () => {
	await joinAudioStream()
	document.getElementById('join-btn').style.display = 'none'
	document.getElementById('mic-controls').style.display = 'flex'

}

let handleUserJoined = async (user, mediaType) => {

	remoteUsers[user.uid] = user
	await client.subscribe(user, mediaType)
	console.log("subscribe success")

	if (mediaType === 'audio'){
		// player = '<div class="audio-container" id="user-container-${user.uid}"><div class="audio-player" id="user-${user.uid}"></div></div>'
		// document.getElementById('join-mic').insertAdjacentHTML('beforeend', player)
		const remoteAudioTrack = user.audioTrack;
		remoteAudioTrack.play();

	}
}

let toggleMic = async (e) => {
	if(localTracks.muted){
		await localTracks.setMuted(false)
		e.target.innerText = 'Mic On'
	}else{
		await localTracks.setMuted(true)
		e.target.innerText = 'Mic Off'
	}
}

let slideDoors = async () => {

	console.log("slideDoors success")
	

}

document.getElementById('join-btn').addEventListener('click', joinStream)
document.getElementById('mic-btn').addEventListener('click', toggleMic)
document.getElementById('to-gallery').addEventListener('click', slideDoors)