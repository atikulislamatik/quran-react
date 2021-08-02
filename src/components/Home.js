import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Chapter from './Chapter'
import Player from './Player'
import Qari from './Qari'

const Home = () => {

  const [quri, setQuri] = useState([])
  const [quriDetail, setQuriDetail] = useState(null);
  const [chapters, setChapters] = useState([])

  const [chapterDetail, setChapterDetail] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const {
        data: { reciters },
      } = await axios.get(`https://mp3quran.net/api/_bengali.json`)

      setQuri(reciters.slice(0, 8))
    }

    fetchData()
  }, [])



  // Get All Chapters
  useEffect(() => {
    async function fetchChapter() {
      const {
        data: { chapters },
      } = await axios.get(`https://api.quran.com/api/v4/chapters?language=en`)

      setChapters(chapters);
    }
    fetchChapter()
  }, [])



  const quriHandler = (quri) => {
    setQuriDetail(quri);
    console.log(quri)
  }

  const chapterHandler = (chapters) => {
    setChapterDetail(chapters)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <Qari quri={quri} quriHandler={quriHandler} />
          </div>
          <div className="col-lg-3">
            <Player
              quriDetail={quriDetail}
              chapterDetail={chapterDetail}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Chapter chapters={chapters} chapterHandler={chapterHandler} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
