const person = {
    name: 'Aashish B',
    address: {
        line1: 'Heaven on Earth',
        line2: 'Mumbai',
        line3: 'India',
    },
    profiles: ['twitter', 'reddit', 'linkedin'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )  
    }
}

export default function LearningJavascript() {
    return (
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.address.line2}</div>
        <div>{person.address.line3}</div>
        <div>{person.profiles[1]}</div>
        <div>{person.printProfile()}</div>
        </>
    )
}