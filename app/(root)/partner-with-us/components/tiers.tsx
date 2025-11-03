import React from 'react';

const tiers = [
    {
        title: 'Presenting Partner',
        description: `
        The Presenting Partner holds the highest distinction at the Annual Excellence Awards. 
        Beyond brand exposure across international media and elite audiences, this partnership is a statement of leadership, 
        prestige, and innovation. It is a strategic investment that drives business impact, opens doors to global networks, 
        and positions the partner as a key influencer in shaping culture, commerce, and creativity on a world stage.
        `
    },
    {
        title: 'Cultural Partner',
        description: `
        The Cultural Partner connects the Awards to the wider world of creativity and storytelling. 
        By supporting artistic excellence, heritage, and diversity, they enhance the event’s prestige and 
        contribute to Australia’s cultural influence globally. This partnership offers high-value visibility and 
        association with a celebration that resonates with audiences, industry leaders, and international stakeholders alike.
        `
    },
    {
        title: 'Supporting Partners',
        description: `
        Supporting Partners form the foundation of the Annual Excellence Awards. Their involvement ensures a world-class event 
        that attracts global attention, generates media coverage, and provides meaningful opportunities for brand alignment with 
        innovation and excellence. Through this partnership, they gain visibility, credibility, and 
        association with an event that elevates both industry and nation on an international scale.
        `
    },
]

const Tiers = () => {
    return (
        <div>
            {
                tiers.map((tier, index) => (
                    <div key={index} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-1 text-yellow-500 underline">{tier.title}</h2>
                        <p className="text-justify text-gray-400">{tier.description.trim()}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Tiers;