import { Root, Fallback, Image } from '@radix-ui/react-avatar';

interface AvatarProps {
    fallback: string;
    image?: string;
}

const Avatar = ({ fallback, image }: AvatarProps) => {
    return (
        <Root className="inline-flex h-[50px] w-[50px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
            <Image
                className="h-full w-full rounded-[inherit] object-cover"
                src={image}
                alt={fallback}
            />
            <Fallback
                className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                delayMs={600}
            >
                {fallback}
            </Fallback>
        </Root>
    );
};

Avatar.defaultProps = {
    image: '',
};
export default Avatar;
