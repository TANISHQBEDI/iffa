import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About IFFA Awards",
  description:
    "Learn more about the IFFA Awards, our mission, history, and commitment to celebrating cinematic excellence worldwide.",
}

type QnA = {
    question: string;
    answer: string;
    bullets?: string[];
}

const qna : QnA[] = [
    {
        question: "What is the IFFA Awards Night?",
        answer: `
        The IFFA Awards are based on merits, honouring outstanding achievements in cinema and recognising excellence across artistic and technical disciplines. 
        The IFFA Awards Night is Australia’s most glamorous celebration of cinematic excellence and global storytelling. 
        Each year, it transforms into a highly anticipated red-carpet event, bringing together filmmakers, actors, producers, industry leaders, and cultural influencers. 
        With elegance, sophistication, and star power, IFFA is where creativity meets prestige, and the art of storytelling is celebrated at its finest.
        `
    },
    {
        question: "How does IFFA champion creativity and filmmakers’ careers?",
        answer: `
        IFFA is more than an awards ceremony—it is a platform for creative growth and professional advancement. Every story deserves to be seen, and every filmmaker, 
        whether emerging or established, deserves recognition. IFFA provides filmmakers with international exposure, critical attention, and industry credibility, 
        opening doors to collaborations, funding, and distribution opportunities worldwide.
        `
    },
    {
        question: "What is IFFA’s vision for Australian talent?",
        answer: `
        Australia’s screen industry is rich with innovation and storytelling brilliance. IFFA’s mission is to showcase this talent on a global stage, 
        connecting Australian creators with international audiences and markets. By highlighting local talent alongside exceptional work from around the world, 
        IFFA fosters cultural exchange, mutual inspiration, and creative synergy, elevating Australia’s profile in the global screen industry.
        `
    },
    {
        question: "What are the IFFA Award Categories?",
        answer: `
        The IFFA Awards Night recognises excellence across the entire spectrum of filmmaking, celebrating both creative and technical achievements. 
        From outstanding performances to groundbreaking storytelling and visionary direction, IFFA honours the very best in cinema and modern screen formats.
        At IFFA, we present awards across the following categories:
        `,
        bullets: [
            " Best Actor in a Leading Role",
            "Best Actor in a Supporting Role",
            "Best Actress in a Leading Role",
            "Best Actress in a Supporting Role",
            "Best Animated Film",
            "Best Cinematography",
            "Best Direction",
            "Best Documentary Film",
            "Best International Feature Film",
            "Best International Short Film",
            "Best Screenplay Writing",
            "Best Original Web Series",
            "Best TV Series"
        ]
    },
    {
        question: "Why is IFFA recognition so impactful?",
        answer: `
        Being nominated or winning at IFFA is a career milestone. Past honourees have leveraged their recognition to achieve greater success both in Australia and internationally. 
        The awards provide exposure to industry leaders, sponsorship opportunities, expanded audiences, and mentorship through panels, networking events, 
        and professional development programs, extending the impact well beyond the ceremony itself.
        `
    },
    {
        question: "How does IFFA reach a global audience?",
        answer: `
        IFFA uses a powerful network of media partners, streaming platforms, and social media campaigns to promote nominated and winning films to more than 200 million viewers worldwide. 
        Our coverage spans traditional press, digital marketing, influencer partnerships, and broadcast channels, amplifying filmmakers’ voices far beyond the red carpet.
        `
    },
    {
        question: "What makes IFFA Australia’s most stylish screen event?",
        answer: `
        IFFA is synonymous with red carpet glamour, high-profile hosts, live entertainment, and exclusive after-parties. The event attracts celebrities, creative powerhouses, and VIPs, 
        generating extensive media buzz across television and social platforms. Each year, IFFA delivers a unique, immersive experience that celebrates both industry excellence and Australia’s vibrant cultural scene.
        `
    },
    {
        question: "How does IFFA shape the future of cinema?",
        answer: `In an era of rapid technological change, IFFA supports innovation, artistic integrity, and original storytelling. 
        By celebrating risk-taking, diverse voices, and inclusive perspectives, we encourage filmmakers to push boundaries. 
        This commitment cultivates a dynamic, representative, and globally influential screen industry.`
    },
    {
        question: "Who can participate in IFFA?",
        answer: `
        IFFA welcomes filmmakers, producers, actors, documentarians, and digital creators worldwide. 
        We seek submissions that embody creativity, originality, and impact, across a wide variety of genres and formats. 
        Participants gain prestigious recognition, global exposure, and access to IFFA’s extensive networks, fostering career growth and international collaboration.
        `
    },
    {
        question: "Why join IFFA Awards Night?",
        answer: `
        IFFA is a celebration of cinematic heritage, contemporary creativity, and future possibilities. It honours the storytellers shaping cultural dialogue while championing the innovation driving the industry forward. Join us for a night of glamour, inspiration, and opportunity—where your story takes its rightful place among the best in global cinema.
        `
    }
]

const About = () => {
  return (
    <div>
        <span className='title'>About IFFA</span>
        <div className='about-section space-y-5 mt-5'>
            {qna.map((item, index) => (
                <div key={index} className='about-item'>
                    {item.question && <h2 className='text-2xl underline text-yellow-500'>{item.question}</h2>}
                    <p className='leading-relaxed text-gray-400 text-justify'>{item.answer}</p>
                    {item.bullets && (
                        <ul className='text-gray-500 list-disc list-inside mt-2'>
                            {item.bullets.map((bullet, bIndex) => (
                                <li key={bIndex}>{bullet}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default About