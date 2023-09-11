export default function Hero(){
    return (
        <div className="w-full px-12">
          <div className="bg-gradient-to-r from-green-600 from-20% via-emerald-600 via-40% to-cyan-600 to-40% px-10">
            <div className="flex flex-col text-white font-medium content-center py-12">
              <span className="text-center text-5xl font-medium leading-relaxed">Urubuga Rwa mbere Mu Rwanda Rufasha Abantu Bose Kubona Provisoire</span>
              <span className="text-center text-2xl pt-4 px-12 leading-relaxed">NVB ni urubuga rwashyiriweho gufasha abanyarwanda Bose kumenya amategeko y'umuhanda mu rwego rwo kwirinda impanuka.</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 content-center py-12">
            <div className="flex flex-row w-fit self-center my-4 gap-4">
              <svg className="h-16 w-16 text-emerald-600"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="12 4 4 8 12 12 20 8 12 4" />  <polyline points="4 12 12 16 20 12" />  <polyline points="4 16 12 20 20 16" /></svg>
              <div className="flex flex-col mx-auto leading-relaxed">
                <span className="text-2xl font-medium text-gray-900">Amasomo ateguwe bigezweho</span>
                <span className="text-gray-700">Tuvunagura mu bice amasomo akomeye tukayagira ayoroshye kandi yigika mu gihe gito</span>
              </div>
            </div>
            <div className="flex flex-row w-fit self-center my-4 gap-4">
              <svg className="h-16 w-16 text-emerald-600"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="12 4 4 8 12 12 20 8 12 4" />  <polyline points="4 12 12 16 20 12" />  <polyline points="4 16 12 20 20 16" /></svg>
              <div className="flex flex-col mx-auto leading-relaxed">
                <span className="text-2xl font-medium text-gray-900">Amasomo ateguwe bigezweho</span>
                <span className="text-gray-700">Tuvunagura mu bice amasomo akomeye tukayagira ayoroshye kandi yigika mu gihe gito</span>
              </div>
            </div>
          </div>
        </div>
    )
}