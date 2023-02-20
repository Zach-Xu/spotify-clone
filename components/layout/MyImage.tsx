import { defaultImageURL } from '../../lib/constant'

interface ImageProps {
    src: string | undefined
    className?: string,
    description?: string
}

const MyImage: React.FC<ImageProps> = ({ src, className, description }) => {
    return <img src={src ?? defaultImageURL} alt={description} className={className} />
}

export default MyImage