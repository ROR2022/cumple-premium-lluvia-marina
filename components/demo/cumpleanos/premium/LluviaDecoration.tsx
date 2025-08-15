"use client"

import Image from 'next/image'
import { cn } from '@/lib/utils'

type DecorationType = 'rueda1' | 'rueda2' | 'vineta1' | 'vineta2'
type DecorationSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
type AnimationType = 'bounce' | 'pulse' | 'spin' | 'ping' | 'spin-slow' | 'none'

interface LluviaDecorationProps {
  type: DecorationType
  size?: DecorationSize
  animation?: AnimationType
  className?: string
  delay?: string
  opacity?: string
}

const imageMap: Record<DecorationType, string> = {
  rueda1: '/images/custom/lluvia_rueda1.jpg',
  rueda2: '/images/custom/lluvia_rueda2.jpg',
  vineta1: '/images/custom/lluvia_vineta1.jpg',
  vineta2: '/images/custom/lluvia_vineta2.jpg',
}

const sizeMap: Record<DecorationSize, { width: number; height: number; className: string }> = {
  sm: { width: 24, height: 24, className: 'w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6' },
  md: { width: 32, height: 32, className: 'w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8' },
  lg: { width: 48, height: 48, className: 'w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12' },
  xl: { width: 64, height: 64, className: 'w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16' },
  xxl: { width: 96, height: 96, className: 'w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24' },
}

const animationMap: Record<AnimationType, string> = {
  bounce: 'animate-bounce',
  pulse: 'animate-pulse',
  spin: 'animate-spin',
  ping: 'animate-ping',
  'spin-slow': 'animate-spin-slow',
  none: '',
}

export function LluviaDecoration({ 
  type, 
  size = 'lg', 
  animation = 'pulse', 
  className = '',
  delay = '',
  opacity = 'opacity-80'
}: LluviaDecorationProps) {
  const imageInfo = sizeMap[size]
  const animationClass = animationMap[animation]
  const delayClass = delay ? `delay-${delay}` : ''
  
  return (
    <div className={cn(
      imageInfo.className,
      animationClass,
      delayClass,
      opacity,
      'rounded-full overflow-hidden shadow-lg backdrop-blur-sm',
      className
    )}>
      <Image
        src={imageMap[type]}
        alt={`Decoración ${type}`}
        width={imageInfo.width}
        height={imageInfo.height}
        className="w-full h-full object-cover rounded-full filter brightness-110 contrast-110"
        priority={size === 'xl' || size === 'xxl'}
      />
    </div>
  )
}

// Componente especializado para adornos flotantes con posición absoluta
interface FloatingLluviaDecorationProps extends LluviaDecorationProps {
  position: string
  hideOnMobile?: boolean
}

export function FloatingLluviaDecoration({ 
  position, 
  hideOnMobile = true,
  ...props 
}: FloatingLluviaDecorationProps) {
  return (
    <div className={cn(
      'absolute pointer-events-none', 
      position,
      hideOnMobile ? 'hidden lg:block' : '',
      'max-w-full max-h-full'
    )}>
      <LluviaDecoration {...props} />
    </div>
  )
}
