export interface VideoItem {
  id: string;
  title: string;
  category: 'ai-video' | 'reels' | 'photo' | 'commercial';
  format: '16:9' | '9:16';
  duration: string;
  tools: string[];
  thumbnail: string;
  videoUrl: string;
  description: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeFilter?: string;
  afterFilter?: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export const portfolioVideos: VideoItem[] = [
  {
    id: 'v1',
    title: 'Neon Cyberpunk Launch Film',
    category: 'commercial',
    format: '16:9',
    duration: '0:32',
    tools: ['Runway Gen-3', 'After Effects', 'DaVinci Resolve'],
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://videos.pexels.com/video-files/3195394/3195394-sd_640_360_25fps.mp4',
    description: 'AI-generated futuristic cityscape with cinematic VFX compositing and anamorphic color grading.',
  },
  {
    id: 'v2',
    title: 'High-Retention Fashion Reel',
    category: 'reels',
    format: '9:16',
    duration: '0:28',
    tools: ['Premiere Pro', 'Kling AI', 'Magnific'],
    thumbnail: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80',
    videoUrl: 'https://videos.pexels.com/video-files/3209828/3209828-sd_640_360_25fps.mp4',
    description: 'Viral short-form reel with generative AI costume transitions, dynamic sound FX, and punchy captions.',
  },
  {
    id: 'v3',
    title: 'Generative Sci-Fi VFX Sequence',
    category: 'ai-video',
    format: '16:9',
    duration: '0:45',
    tools: ['Runway Gen-3', 'ComfyUI', 'DaVinci Resolve'],
    thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://videos.pexels.com/video-files/853889/853889-sd_640_360_25fps.mp4',
    description: 'Full-motion neural VFX synthesis paired with sound design and particle simulation.',
  },
  {
    id: 'v4',
    title: 'Dynamic Creator Reel (9:16)',
    category: 'reels',
    format: '9:16',
    duration: '0:18',
    tools: ['Premiere Pro', 'After Effects', 'Topaz'],
    thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
    videoUrl: 'https://videos.pexels.com/video-files/6981411/6981411-sd_640_360_25fps.mp4',
    description: 'Fast-paced storytelling with kinetic typography, beat-matched jump cuts, and visual hooks.',
  },
  {
    id: 'v5',
    title: 'Product Kinetic Commercial',
    category: 'commercial',
    format: '16:9',
    duration: '0:38',
    tools: ['After Effects', 'Runway Gen-3', 'Premiere Pro'],
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://videos.pexels.com/video-files/5377684/5377684-sd_640_360_25fps.mp4',
    description: 'Macro product reveal with AI background morphing and studio lighting simulation.',
  },
  {
    id: 'v6',
    title: 'Neural Light & Motion Art',
    category: 'ai-video',
    format: '16:9',
    duration: '0:22',
    tools: ['Midjourney', 'Kling AI', 'ComfyUI'],
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://videos.pexels.com/video-files/856973/856973-sd_640_360_25fps.mp4',
    description: 'AI-generated holographic light transitions engineered for commercial broadcast.',
  },
];

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: 'ba1',
    title: 'Raw S-Log vs AI Color Grade & Relighting',
    description: 'Flat, desaturated raw camera log profile transformed into a vibrant, high-contrast cinematic masterpiece with AI color grading and virtual volumetric relighting.',
    beforeImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=85',
    afterImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=95',
    beforeLabel: 'RAW FLAT S-LOG',
    afterLabel: 'AI COLOR & RELIGHT',
    beforeFilter: 'contrast(0.65) brightness(0.9) saturate(0.25) sepia(0.1)',
    afterFilter: 'contrast(1.25) brightness(1.05) saturate(1.35) drop-shadow(0 0 10px rgba(6,182,212,0.2))',
    tag: 'DaVinci Resolve + Magnific',
  },
  {
    id: 'ba2',
    title: 'Tabletop Product vs AI Studio Background',
    description: 'A basic flat watch photo transformed into a high-end luxury commercial campaign with generative neon studio environment and specular light passes.',
    beforeImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&auto=format&fit=crop&q=90',
    beforeLabel: 'BASIC TABLETOP SHOT',
    afterLabel: 'AI GENERATIVE STUDIO',
    beforeFilter: 'contrast(0.8) brightness(0.85) saturate(0.4)',
    afterFilter: 'contrast(1.2) brightness(1.08) saturate(1.25)',
    tag: 'ComfyUI + Midjourney',
  },
  {
    id: 'ba3',
    title: 'Low-Res Frame vs 4K AI Upscale & Inpainting',
    description: 'Severely compressed, noisy low-res source frame restored to crystal-clear 4K resolution with generative texture reconstruction and inpainting.',
    beforeImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=85',
    afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=95',
    beforeLabel: 'COMPRESSED LOW-RES (480P)',
    afterLabel: '4K AI RECONSTRUCTED',
    beforeFilter: 'blur(3.5px) contrast(0.8) brightness(0.92) saturate(0.8)',
    afterFilter: 'contrast(1.2) brightness(1.05) saturate(1.15)',
    tag: 'Magnific + Topaz AI',
  },
];

export const services: ServiceItem[] = [
  {
    id: 's1',
    icon: 'Zap',
    title: 'Viral Short-Form Engine',
    subtitle: 'Reels & Shorts That Convert',
    description: 'High-retention short-form video content engineered for maximum scroll-stop and engagement. Includes AI B-roll, dynamic captions, rhythm-based cuts, and immersive sound design.',
    features: [
      'AI B-roll generation (Runway Gen-3 / Kling AI)',
      'Dynamic animated kinetic captions',
      'Sound design & audio mastering',
      'Optimized for Reels, TikTok & Shorts (9:16)',
      '3–5 day turnaround',
    ],
    highlight: false,
  },
  {
    id: 's2',
    icon: 'Film',
    title: 'Commercial AI Video & VFX',
    subtitle: 'Brand Films That Move',
    description: 'Full-scale brand commercials and product visualizations using generative AI video, motion graphics, and precision compositing. The cinematic edge your brand deserves.',
    features: [
      'Generative AI video sequences',
      'VFX compositing & rotoscoping',
      'Professional color grading (DaVinci Resolve)',
      '4K masters for broadcast & digital ads',
      '7–14 day turnaround',
    ],
    highlight: true,
  },
  {
    id: 's3',
    icon: 'Image',
    title: 'AI Photo & Thumbnail Studio',
    subtitle: 'Images That Demand Clicks',
    description: 'High-CTR YouTube thumbnails, generative product photography, AI retouching, and background replacement — turning static shots into scroll-stopping visual assets.',
    features: [
      'Generative background replacement',
      'AI skin & product retouching',
      'High-CTR YouTube thumbnail design',
      'Consistent brand kit & color aesthetic',
      '24–48 hr turnaround',
    ],
    highlight: false,
  },
];

export const tools = [
  'Premiere Pro',
  'After Effects',
  'DaVinci Resolve',
  'Runway Gen-3',
  'Midjourney',
  'ComfyUI',
  'Kling AI',
  'Magnific',
  'Photoshop',
  'Topaz AI',
  'CapCut Pro',
  'Stable Diffusion',
];
