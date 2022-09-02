interface IVideo {
    width: string,
    height: string
    embedId: string,
}

const VimeoEmbed = ({ width, height, embedId } : IVideo) => {
	return <iframe
		width={width || '853'}
		height={height || '480'}
		src={`https://player.vimeo.com/video/${embedId}`}
		frameBorder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen
		title="Embedded Vimeo"
	/>
}

export default VimeoEmbed
