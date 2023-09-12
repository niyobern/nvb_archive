export default function Lesson(){
    return (
        <div className="flex flex-col w-full">
            <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden">
              <iframe
                className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/qlyUQaz8sH8?si=TTjiEglpHmJfalEq"
                allowFullScreen={true}
                data-gtm-yt-inspected-2340190_699="true"
                id="240632615"></iframe>
            </div>
            <div>
                <span>Heading one</span>
                <p>Contents are here</p>
            </div>
        </div>
    )
}