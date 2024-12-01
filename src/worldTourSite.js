import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, PauseCircle } from 'lucide-react';

const WorldTourSite = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); // 動画要素への参照

  const toggleAudio = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // 動画を一時停止
      } else {
        videoRef.current.play(); // 動画を再生
      }
      setIsPlaying(!isPlaying); // 再生状態をトグル
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* ペンキ飛散エフェクト */}
      <motion.div 
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.3, 0.1, 0.2], 
          background: 'radial-gradient(circle, rgba(255,0,150,0.3) 0%, rgba(0,255,255,0.2) 50%, rgba(255,255,0,0.1) 100%)' 
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* ヘッダー */}
        <header className="py-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold tracking-wider uppercase">
            Minisimi WORLD TOUR
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#dates" className="hover:text-pink-500 transition">DATES</a></li>
              <li><a href="#tickets" className="hover:text-cyan-500 transition">TICKETS</a></li>
              <li><a href="#gallery" className="hover:text-yellow-500 transition">GALLERY</a></li>
            </ul>
          </nav>
        </header>

        {/* メインコンテンツ */}
        <main className="mt-16">
          <section className="flex flex-col items-center justify-center">
            <motion.h2 
              className="text-6xl font-black uppercase tracking-wider mb-8 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              EXPLOSIVE SONIC JOURNEY
            </motion.h2>
            <p className="text-xl opacity-70 mb-8 text-center">
              グローバルステージで、音楽の限界を超える、未知のエクスペリエンス。
            </p>

            {/* 動画セクション */}
            <div className="relative w-full max-w-4xl">
              <video
                ref={videoRef}
                src="https://s17.aconvert.com/convert/p3r68-cdx67/934oz-59hd3.mp4" // 動画パス
                className="w-full h-auto rounded-lg shadow-xl object-cover max-h-[80vh]" // レスポンシブスタイル
                controls={false} // カスタムボタンを使用
              />
              <button 
                onClick={toggleAudio} 
                className="absolute bottom-4 left-4 bg-pink-500 text-black p-4 rounded-full hover:bg-cyan-500 transition"
              >
                {isPlaying ? <PauseCircle size={32} /> : <Play size={32} />}
              </button>
            </div>
          </section>

          <section className="mt-12 flex justify-between items-center gap-4 mb-16">
            <div className="flex-1 bg-gray-800 p-6 text-center rounded-lg">
              <h3 className="text-2xl font-bold">🗼 1St. Tokyo</h3>
              <p className="mt-2 opacity-70 my-2">This is the first place.</p>
              <img
                src={`${process.env.PUBLIC_URL}/tokyo.png`}
                alt='tokyo_image'
                className="w-24 h-24 object-cover mx-auto"
                />
            </div>
            <div className="flex-1 bg-gray-800 p-6 text-center rounded-lg">
              <h3 className="text-2xl font-bold">🚣‍♀️ 2nd. Yokosuka</h3>
              <p className="mt-2 opacity-70 my-2">Here is Fune.</p>
              <img
                src={`${process.env.PUBLIC_URL}/yokosuka.png`}
                alt='yokosuka_png'
                className="w-24 h-24 object-cover mx-auto"
              />
            </div>
            <div className="flex-1 bg-gray-800 p-6 text-center rounded-lg">
              <h3 className="text-2xl font-bold">🍁 3rd. Canada</h3>
              <p className="mt-2 opacity-70 my-2">KOKO ORENOMACHI.</p>
              <img
                src={`${process.env.PUBLIC_URL}/canada.png`}
                alt='canada_png'
                className="w-24 h-24 object-cover mx-auto"
              />
            </div>
          </section>
        </main>
      </div>

    {/* フッター */}
    <footer className="bg-gray-900 text-white text-center py-6 mt-auto">
        <p className="text-sm">
          © 2024 World Tour. All Rights Reserved.
        </p>
    </footer>

    </div>
  );
};

export default WorldTourSite;
