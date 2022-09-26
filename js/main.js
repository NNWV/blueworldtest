const APP_ID = "332af2bbdcde4183a1317e9e71f6e5ef"
const TOKEN = "007eJxTYHA01VXTKg0UKbvh/W51/1LHeRwPwu+7C+w/dqa7OMqvkFeBwdjYKDHNKCkpJTkl1cTQwjjR0NjQPNUy1dwwzSzVNDXNcKNh8mYm42TRUy8ZGKEQxGdhyE3MzGNgAADXfB8M"
const CHANNEL ="main"

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
	document.getElementById('join-btn').style.background = 'red'
	await joinAudioStream()
	document.getElementById('join-btn').style.display = 'none'
	document.getElementById('join-btn').style.background = 'transparent'
	document.getElementById('mic-controls').style.display = 'grid'

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
		e.target.innerText = 'mic'
	}else{
		await localTracks.setMuted(true)
		e.target.innerText = 'mic_off'
	}
}

let leaveStream = async () =>{
	for (let i = 0; i <localTracks.length; i++) {
		localTracks.stop();
		localTracks.close();
		localTracks.setMuted();
	} 

	await client.leave()
	document.getElementById('mic-controls').style.display = 'none'
	document.getElementById('join-btn').style.display = 'flex'
	console.log("goodbye");
} 

//set up a mute stream? or just leave stream maybe.

//also need to destroy the stream. its still running when left at this point


document.getElementById('join-btn').addEventListener('click', joinStream)
document.getElementById('mic-btn').addEventListener('click', toggleMic)
document.getElementById('leave-btn').addEventListener('click', leaveStream)