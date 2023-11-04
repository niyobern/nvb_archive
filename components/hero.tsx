import Link from "next/link"
export default function Hero(){
    return (
        <div className="w-full md:px-12 flex flex-col">
          <div className="bg-gradient-to-r from-green-600 from-20% via-emerald-600 via-40% to-cyan-600 to-40% px-2 md:px-10">
            <div className="flex flex-col text-white font-medium content-center py-8 md:py-12">
              <span className="text-center text-3xl md:text-5xl font-medium leading-relaxed">Urubuga Rwa mbere Mu Rwanda Rufasha Abantu Bose Kubona Provisoire</span>
              <span className="text-center text-xl md:text-2xl pt-4 md:px-12 leading-relaxed">NVB ni urubuga rwashyiriweho gufasha abanyarwanda Bose kumenya amategeko y&apos;umuhanda mu rwego rwo kwitegura ikizamini cya provisoire.</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2 md:px-0 py-12 md:w-2/3 self-center border-b border-gray-400">
            <div className="flex flex-row w-fit my-4 gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-16 h-16">
                <path d="M5.507 4.048A3 3 0 017.785 3h8.43a3 3 0 012.278 1.048l1.722 2.008A4.533 4.533 0 0019.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008z" />
                <path fillRule="evenodd" d="M1.5 10.5a3 3 0 013-3h15a3 3 0 110 6h-15a3 3 0 01-3-3zm15 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 15a3 3 0 100 6h15a3 3 0 100-6h-15zm11.25 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zM19.5 18a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clipRule="evenodd" />
              </svg>
              <div className="flex flex-col mx-auto leading-relaxed">
                <span className="text-2xl font-medium text-gray-900">Amasomo ateguwe bigezweho</span>
                <span className="text-gray-700">Tuvunagura mu bice amasomo akomeye tukayagira ayoroshye kandi yigika mu gihe gito</span>
              </div>
            </div>
            <div className="flex flex-row w-fit my-4 gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-16 h-16">
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
              <div className="flex flex-col mx-auto leading-relaxed">
                <span className="text-2xl font-medium text-gray-900">Tugutegura gukora ibizamini</span>
                <span className="text-gray-700">Uru rubuga rufite imyitozo itandukanye igufasha kwitegura ibizamini bikenerwa nk&apos;uruhushya rw&apos;agateganyo rwo gutwara.</span>
              </div>
            </div>
            <div className="flex flex-row w-fit my-4 gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-16 h-16">
                <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
              </svg>
              <div className="flex flex-col mx-auto leading-relaxed">
                <span className="text-2xl font-medium text-gray-900">Ibiciro biboneye</span>
                <span className="text-gray-700">Uhitamo amasomo n&apos;imyitozo ihwanye n&apos;amafaranga wifuza gutanga, kandi ukanyurwa.</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:w-2/3 self-center gap-4 py-4">
            <span className="text-2xl font-medium">Ufite ikibazo?</span>
            <div className="text-gray-700 font-medium">Kanda <Link href={"/"} className="text-green-500">hano</Link> kugirango utwandikire uhabwe ubufasha.</div>
          </div>
        </div>
    )
}