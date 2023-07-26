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
                className="font-bold text-neutral-800 leading-1 flex h-full w-full items-center justify-center bg-blue-100 text-[15px]"
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
