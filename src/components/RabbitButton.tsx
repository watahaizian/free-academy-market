import { useState } from 'react'

interface RabbitButtonProps {
  onClick?: () => void
  className?: string
  isActive?: boolean
}

export default function RabbitButton({ onClick, className = '', isActive = false }: RabbitButtonProps) {
  const [isBouncing, setIsBouncing] = useState(false)
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([])

  const handleClick = () => {
    setIsBouncing(true)
    onClick?.()
    
    // ハートエフェクトを生成（より大きなアイコンに合わせて範囲を拡大）
    const newHearts = Array.from({ length: 3 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 60 - 30, // -30px から 30px の範囲
      y: Math.random() * 30 - 15  // -15px から 15px の範囲
    }))
    setHearts(newHearts)
    
    setTimeout(() => {
      setIsBouncing(false)
      setHearts([])
    }, 1000)
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <button
        onClick={handleClick}
        className={`p-2 transition-colors duration-200 relative ${
          isActive 
            ? 'text-gray-600 hover:text-gray-700' 
            : 'text-gray-400 hover:text-gray-500'
        }`}
        aria-label={isActive ? "スペシャルいいね解除" : "スペシャルいいね"}
      >
        <div className={`relative ${isBouncing ? 'animate-bounce-rabbit' : ''}`}>
          {/* 状態に応じてうさぎの画像を変更（サイズを2倍に） */}
          <img 
            src={isActive ? "/icons/rabbit-so-cute.jpg" : "/icons/rabbit-silhouette.png"} 
            alt={isActive ? "可愛いうさぎ" : "うさぎシルエット"}
            className="w-12 h-12 transition-all duration-200"
          />
          
          {/* アクティブ状態の時は右上にハートを表示（位置を調整） */}
          {isActive && (
            <span className="absolute -top-2 -right-2 text-pink-500 text-lg animate-pulse">
              ❤️
            </span>
          )}
          
          {/* 浮き上がるハートエフェクト */}
          {hearts.map((heart) => (
            <div
              key={heart.id}
              className="absolute text-pink-500 animate-float-heart pointer-events-none"
              style={{
                left: `${heart.x}px`,
                top: `${heart.y}px`,
                animationDelay: `${Math.random() * 0.2}s`
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      </button>
      
      {/* ラベルテキスト */}
      <span className="text-xs text-gray-500 mt-1">
        スペシャルいいね！
      </span>
    </div>
  )
}
