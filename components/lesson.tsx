export default function Lesson(){
    return (
        <div className="flex flex-col w-full">
            <div className="aspect-w-16 aspect-h-9 rounded">
              <iframe src="https://www.youtube.com/embed/XiuRH7i022g" allowFullScreen={true}></iframe>
            </div>
            <div className="flex flex-col gap-2 bg-white">
                <span className="text-2xl font-bold">Heading one</span>
                <span className="text-xl font-medium">Heading 2</span>
                <p className="leading-tight text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}