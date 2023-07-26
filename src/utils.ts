export const getInitials = (name: string) => {
    return name
        .split(' ')
        .map((word) => word[0])
        .join('');
};

export const getRelativeTime = (date: string) => {
    const now = new Date();
    const created = new Date(date);
    const diff = now.getTime() - created.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    if (hours > 24) {
        return created.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }
    if (hours > 0) {
        return `${hours} hours ago`;
    }
    if (minutes > 0) {
        return `${minutes} minutes ago`;
    }
    return `${seconds} seconds ago`;
};
