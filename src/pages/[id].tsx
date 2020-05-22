import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { Button } from '@material-ui/core'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import Replay30Icon from '@material-ui/icons/Replay30'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import styles from 'src/features/trivia/trivia.module.scss'
import BasePage from 'src/templates/core/BasePage'

const videos = [
  {
    answer: '30 Rock',
    id: 'EZst6TF3fek',
    start: 94,
    length: 34,
    nextVideoId: 'huteagsm_Io',
  },
  {
    answer: 'Community',
    id: 'qEGbjR1Y9Qo',
    start: 60,
    length: 30,
    nextVideoId: 'veBokK7K9vE',
  },
  {
    answer: 'Friends',
    id: 'S8PNXgLhkT0',
    start: 91,
    length: 38,
    nextVideoId: 'Xs-HbHCcK58',
  },
  {
    answer: 'Breaking Bad',
    id: 'ilfYnhXD-bE',
    start: 5,
    length: 23,
    nextVideoId: 'F1HNuAE9WdU',
  },
  {
    answer: 'Orange is the New Black',
    id: 'w9_isl1jjHc',
    start: 100,
    length: 24,
    nextVideoId: 'fBITGyJynfA',
  },
  {
    answer: 'Scrubs',
    id: 'JQfM2TVvBFU',
    start: 12,
    length: 29,
    nextVideoId: 'kBz1vvlkzSw',
  },
  {
    answer: 'Law and Order',
    id: 'xz4-aEGvqQM',
    start: 88,
    length: 24,
    nextVideoId: 'IRXNVdiqMuU',
  },
  {
    answer: 'Last Week Tonight with John Oliver',
    id: 'ZqG6fEXFhL0',
    start: 63,
    length: 12,
    nextVideoId: 'kuORoSEGWYo',
  },
  {
    answer: 'Archer',
    id: 'pjUru0tlQxY',
    start: 18,
    length: 30,
    nextVideoId: 'bu0srrOvpDM',
  },
  {
    answer: 'House',
    id: 'u7K72X4eo_s',
    start: 90,
    length: 25,
    nextVideoId: 'a6zJ9dEwNek',
  },
  {
    answer: 'Bojack Horseman',
    id: 'UkhHY7U3LwU',
    start: 145,
    length: 25,
    nextVideoId: 'rQvIR1oL1vE',
  },
  {
    answer: 'Modern Family',
    id: 'F36ZUIoirCM',
    start: 50,
    length: 18,
    nextVideoId: 'q3xrdZpMdu0',
  },
  // {
  //   answer: 'Big Bang Theory',
  //   id: 'CMSYv_Z4SI8',
  //   start: 20,
  //   length: 18,
  //   nextVideoId: 'x6H7k3XBlk4'
  // }
]

const HomePage: NextPage = () => {
  const router = useRouter()
  const [isAnswerDisplayed, setIsAnswerDisplayed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPlayingAnswer, setIsPlayingAnswer] = useState(false)
  const [videoId, setVideoId] = useState(undefined)
  const [video, setVideo] = useState(undefined)
  const [youtubeRef, setYoutubeRef] = useState(undefined)

  useEffect(() => {
    const index: number = parseInt(router.query.id as string) - 1
    setVideoId(index)
    setVideo(videos[index])
  }, [router])

  useEffect(() => {
    setIsAnswerDisplayed(!!localStorage.getItem('ANSWERS_ON'))
  })

  const handleStart = () => {
    if (youtubeRef) {
      youtubeRef.playVideo()
    }
  }

  const handleReady = e => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    setYoutubeRef(e.target)
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handleVideoEnd = () => {
    if (!isAnswerDisplayed || isPlayingAnswer) {
      setVideo(undefined)
    } else {
      setIsPlayingAnswer(true)
    }
  }

  return (
    <BasePage>
      <Head>
        <title>Trivia!</title>
      </Head>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 10,
          width: '100%',
          height: 'calc(100vw * .5625)',
          maxHeight: 450,
          opacity: isPlayingAnswer ? 0 : 100,
          transition: 'opacity 5s',
        }}
      >
        <div
          style={{
            backgroundColor: 'black',
            color: 'white',
            margin: 'auto',
            maxWidth: 800,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div>
            <div style={{ fontSize: '9vw' }}>
              {`Question #${router.query.id}`}
            </div>
            {isLoading && <div style={{ fontSize: '3vw' }}>Loading...</div>}
            <div style={{ fontSize: '3vw', opacity: isLoading || isPlaying ? 0 : 100, transition: 'opacity 5s ease 3s' }}>
              Autoplay disabled (hit play!)
            </div>
          </div>
        </div>
      </div>
      {video ? (
        <YouTube
          containerClassName={styles.playerContainer}
          videoId={video.id}
          opts={{
            width: '100%',
            height: '100%',
            playerVars: {
              autoplay: 1,
              controls: 0,
              fs: 0,
              start: isAnswerDisplayed
                ? video.start + Math.round(video.length * 0.6)
                : video.start,
              end: video.start + video.length,
              playlist: isAnswerDisplayed ? video.nextVideoId : undefined,
            },
          }}
          onReady={handleReady}
          onPlay={handlePlay}
          onEnd={handleVideoEnd}
        />
      ) : (
        <div className={styles.playerContainer} />
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          height: 'calc(100vw * .4375)',
          maxHeight: 'calc(100vh - 450px)',
          padding: '4rem 2rem',
        }}
      >
        <Button
          variant='contained'
          style={{ width: '33vw', height: '100%', minHeight: 50 }}
          onClick={() => {
            router.reload()
          }}
        >
          <Replay30Icon style={{ fontSize: '8vw' }} />
        </Button>
        <Button
          variant='contained'
          style={{ width: '33vw', height: '100%', minHeight: 50 }}
          onClick={() => {
            handleStart()
          }}
        >
          <PlayCircleFilledIcon style={{ fontSize: '8vw' }} />
        </Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '2rem' }}>
        {videoId !== 0 && (
          <a href={`/${videoId}`}>Previous Question</a>
        )}
        {videoId !== (videos.length - 1) && (
          <a href={`/${videoId + 2}`}>Next Question</a>
        )}
      </div>
    </BasePage>
  )
}
export default HomePage
