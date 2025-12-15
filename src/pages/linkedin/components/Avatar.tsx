

type AvatarProps = {
    url: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}

const Avatar = ({ url="", size="md", className="" }: AvatarProps) => {
    const sizeClass = {
        sm: "w-[24px] h-[24px] min-w-[24px] min-h-[24px]",
        md: "w-[48px] h-[48px] min-w-[48px] min-h-[48px]",
        lg: "w-[64px] h-[64px] min-w-[64px] min-h-[64px]",
    }

    return (
        <div className={`${sizeClass[size]} rounded-full overflow-hidden ${className}`}>
            <img
                src={url}
                alt="avatar"
                className="w-full h-full object-cover"
                loading="lazy"
            />
        </div>
    )
}

export default Avatar;
