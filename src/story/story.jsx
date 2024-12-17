export default function StoryTray({ stories }) {
    let storyCopy = stories.slice();
    storyCopy.push({
        id: 'create',
        label: 'Create Story'
    });

    return (
        <ul>
            {storyCopy.map(story => (
                <li key={story.id}>
                    {story.label}
                </li>
            ))}
        </ul>
    );
}
