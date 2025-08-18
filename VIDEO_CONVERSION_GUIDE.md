# Video Format Conversion Guide

Your video hero section now supports multiple formats for maximum browser compatibility. Here are the recommended formats and conversion commands:

## Recommended Video Formats (in order of preference):

1. **WebM** - Best compression and quality for modern browsers
2. **MP4** - H.264 codec for maximum compatibility
3. **OGG** - Fallback for older browsers

## FFmpeg Conversion Commands:

If you have FFmpeg installed, use these commands to convert your video:

### Convert to WebM (Recommended):
```bash
ffmpeg -i "V2_Macau 4K Drone (online-video-cutter.com).mp4" -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus macau-4k-drone.webm
```

### Convert to MP4 (H.264):
```bash
ffmpeg -i "V2_Macau 4K Drone (online-video-cutter.com).mp4" -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k macau-4k-drone.mp4
```

### Convert to OGV (Ogg):
```bash
ffmpeg -i "V2_Macau 4K Drone (online-video-cutter.com).mp4" -c:v libtheora -q:v 7 -c:a libvorbis -q:a 4 macau-4k-drone.ogg
```

## Online Conversion Tools:

If you don't have FFmpeg, use these online converters:

1. **CloudConvert** - https://cloudconvert.com/
2. **Online-Convert** - https://www.online-convert.com/
3. **Convertio** - https://convertio.co/

## File Placement:

Place the converted files in the `/public/videos/` directory:
- `/public/videos/macau-4k-drone.webm`
- `/public/videos/macau-4k-drone.mp4`
- `/public/videos/macau-4k-drone.ogg`

## Current Status:

The VideoHero component will now:
- ✅ Try WebM first (best quality/compression)
- ✅ Fallback to MP4 if WebM fails
- ✅ Fallback to OGG if MP4 fails
- ✅ Show the Bridge background image if all videos fail
- ✅ Display debug info in development mode
- ✅ Handle all video loading errors gracefully

## Troubleshooting:

1. **Still seeing black background?** 
   - Check browser console for video loading errors
   - Try converting to WebM format first
   - Ensure video file is properly encoded

2. **Video not auto-playing?**
   - Most browsers require muted videos for autoplay
   - The component automatically mutes the video

3. **Performance issues?**
   - Reduce video resolution or increase compression
   - Consider using poster image for slower connections