export default function Lesson(){
    return (
        <div className="flex flex-col w-full">
            <div className="aspect-w-16 aspect-h-9 rounded">
              <iframe src="https://www.youtube.com/embed/XiuRH7i022g" frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="flex flex-col gap-2 bg-white">
                <span className="text-xl font-semibold">Heading one</span>
                <p className="leading-tight">Contents are here</p>
            </div>
        </div>
    )
}