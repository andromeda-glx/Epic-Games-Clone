const thumbnailFileLocation = './images/special-events-thumbnail';

class SpecialEvent{
    id;
    image;
    name;

    constructor(specialEventDetails){
        this.id = specialEventDetails.id;
        this.image = specialEventDetails.image;
        this.name = specialEventDetails.name;
    }
}

export const specialEvents = 
[
    {
        id: 'event-epic-savings',
        image: `${thumbnailFileLocation}/epic-savings.avif`,
        name: 'Epic Savings'
    }
].map(item => {
    return new SpecialEvent(item);
});