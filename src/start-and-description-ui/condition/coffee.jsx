const drink = {
    'tea': {
        partOfPlant: 'leaf',
        caffeineContent: '15–70 mg/cup',
        age: '4,000+ years'
    },
    'coffee': {
        partOfPlant: 'bean',
        caffeineContent: '80–185 mg/cup',
        age: '1,000+ years'
    }
}
function Drink({ name }) {
    const info = drink[name]
    return (
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{info.partOfPlant}</dd>
                <dt>Caffeine content</dt>
                <dd>{info.caffeineContent}</dd>
                <dt>Age</dt>
                <del>
                    <dd>{info.age}</dd>
                </del>
            </dl>
        </section>
    );
}

export default function DrinkList() {
    return (
        <div>
            <Drink name="tea" />
            <Drink name="coffee" />
        </div>
    );
}
