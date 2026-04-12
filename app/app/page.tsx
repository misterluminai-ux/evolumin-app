export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <iframe 
        src="https://luminai-universe.vercel.app/" 
        className="w-full h-screen border-0"
        title="Evolumin Universe"
        allow="fullscreen"
      />
      
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a href="https://drive.google.com/file/d/1kbgcbkFzSsxZMrC2mkmR4BRcgSS3ByrE/view?usp=drivesdk" target="_blank" className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-2xl text-sm font-medium transition shadow-lg">🤖 Claude AI Premium</a>
        <a href="https://drive.google.com/file/d/1aZ_vjndTttDAw-n0I33SDCDShU9vWk0H/view?usp=drivesdk" target="_blank" className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-2xl text-sm font-medium transition shadow-lg">📱 Vídeo Gerador APK</a>
        <a href="https://drive.google.com/file/d/1tXsio6Hobzrw3eOqs8kWwJwHonDDNHa2/view?usp=drivesdk" target="_blank" className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-2xl text-sm font-medium transition shadow-lg">🎥 Grok Pro Cinema</a>
        <a href="https://drive.google.com/file/d/1H3VmpFNKdUPz8PyFUfEWiRHOpROGtnJU/view?usp=drivesdk" target="_blank" className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-2xl text-sm font-medium transition shadow-lg">📥 APK Evolumin</a>
      </div>
    </div>
  );
}
