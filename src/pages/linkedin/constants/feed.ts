export interface FeedPost {
    id: number
    content: string
    creator: {
        name: string
        picture: string
        title: string
        company?: string
        location?: string
        verified?: boolean
    }
    type: "text" | "image" | "article" | "video"
    images?: string[]
    video?: string
    article?: {
        title: string
        description: string
        thumbnail: string
        url: string
    }
    timestamp: string
    metadata: {
        likes: number
        comments: number
        shares: number
        reactions?: {
            like: number
            celebrate: number
            support: number
            love: number
            insightful: number
            funny: number
        }
    }
    hashtags?: string[]
}

export const FEED: FeedPost[] = [
    {
        id: 1,
        content: "Excited to share that our team just launched a new feature that's been months in the making! 🚀\n\nThe journey wasn't easy, but the collaboration and dedication of everyone involved made it possible. Special thanks to our engineering team for their incredible work.\n\nWhat's your biggest achievement this quarter? Share in the comments below! 👇",
        creator: {
            name: "Sarah Chen",
            picture: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
            title: "Product Manager at TechCorp",
            company: "TechCorp",
            location: "San Francisco, CA",
            verified: true
        },
        type: "image",
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
        ],
        timestamp: "2h",
        metadata: {
            likes: 342,
            comments: 28,
            shares: 15,
            reactions: {
                like: 280,
                celebrate: 45,
                support: 12,
                love: 5,
                insightful: 0,
                funny: 0
            }
        },
        hashtags: ["ProductManagement", "TechInnovation", "TeamWork"]
    },
    {
        id: 2,
        content: "Just wrapped up an amazing conference on AI and Machine Learning! 🤖\n\nKey takeaways:\n• The future of AI is collaborative, not competitive\n• Ethics in AI development is more important than ever\n• Continuous learning is the only constant\n\nMet some incredible people and learned so much. Can't wait to apply these insights to our projects!\n\n#AI #MachineLearning #TechConference #ContinuousLearning",
        creator: {
            name: "Michael Rodriguez",
            picture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            title: "Senior Data Scientist | AI Researcher",
            company: "DataFlow Inc.",
            location: "New York, NY"
        },
        type: "image",
        images: [
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop"
        ],
        timestamp: "5h",
        metadata: {
            likes: 189,
            comments: 12,
            shares: 8,
            reactions: {
                like: 150,
                celebrate: 20,
                support: 15,
                love: 2,
                insightful: 2,
                funny: 0
            }
        },
        hashtags: ["AI", "MachineLearning", "TechConference", "ContinuousLearning"]
    },
    {
        id: 3,
        content: "After 5 years at my current company, I'm thrilled to announce that I'm starting a new chapter! 🎉\n\nI'm joining an incredible team that's building the future of remote collaboration. This opportunity aligns perfectly with my passion for creating tools that bring people together, no matter where they are.\n\nGrateful for all the lessons learned and relationships built. Here's to new beginnings! 🚀",
        creator: {
            name: "Emily Johnson",
            picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
            title: "Software Engineer",
            company: "RemoteTools",
            location: "Austin, TX",
            verified: true
        },
        type: "text",
        timestamp: "1d",
        metadata: {
            likes: 456,
            comments: 67,
            shares: 34,
            reactions: {
                like: 380,
                celebrate: 60,
                support: 12,
                love: 4,
                insightful: 0,
                funny: 0
            }
        },
        hashtags: ["NewBeginnings", "CareerGrowth", "RemoteWork"]
    },
    {
        id: 4,
        content: "Just published my latest article on building scalable React applications! 📚\n\nIn this piece, I dive deep into:\n• Component architecture patterns\n• Performance optimization techniques\n• State management best practices\n• Testing strategies that actually work\n\nWould love to hear your thoughts and experiences. What patterns have worked best for your projects?",
        creator: {
            name: "David Kim",
            picture: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
            title: "Frontend Architect | React Expert",
            company: "WebDev Solutions",
            location: "Seattle, WA"
        },
        type: "article",
        article: {
            title: "Building Scalable React Applications: A Complete Guide",
            description: "Learn the patterns and practices that will help you build React applications that scale with your team and user base.",
            thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
            url: "#"
        },
        timestamp: "3h",
        metadata: {
            likes: 523,
            comments: 45,
            shares: 89,
            reactions: {
                like: 420,
                celebrate: 50,
                support: 30,
                love: 15,
                insightful: 8,
                funny: 0
            }
        },
        hashtags: ["React", "WebDevelopment", "Frontend", "JavaScript"]
    },
    {
        id: 5,
        content: "Team lunch today turned into an impromptu brainstorming session! 💡\n\nSometimes the best ideas come when you least expect them. We ended up solving a problem we've been stuck on for weeks, all over pizza and good conversation.\n\nNever underestimate the power of casual collaboration! 🍕",
        creator: {
            name: "Jessica Martinez",
            picture: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
            title: "UX Designer",
            company: "Creative Studio",
            location: "Los Angeles, CA"
        },
        type: "image",
        images: [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
        ],
        timestamp: "8h",
        metadata: {
            likes: 127,
            comments: 18,
            shares: 5,
            reactions: {
                like: 100,
                celebrate: 15,
                support: 8,
                love: 3,
                insightful: 1,
                funny: 0
            }
        },
        hashtags: ["TeamWork", "Collaboration", "WorkLife"]
    },
    {
        id: 6,
        content: "The best investment you can make is in yourself. 📈\n\nThis year, I committed to:\n✅ Learning a new programming language\n✅ Contributing to open source projects\n✅ Attending 3 major tech conferences\n✅ Reading 24 books on personal and professional growth\n\nIt's been challenging, but the growth has been incredible. What are you investing in this year?",
        creator: {
            name: "Robert Taylor",
            picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            title: "Engineering Manager",
            company: "CloudTech",
            location: "Boston, MA",
            verified: true
        },
        type: "text",
        timestamp: "12h",
        metadata: {
            likes: 678,
            comments: 92,
            shares: 156,
            reactions: {
                like: 520,
                celebrate: 100,
                support: 45,
                love: 8,
                insightful: 5,
                funny: 0
            }
        },
        hashtags: ["PersonalGrowth", "CareerDevelopment", "SelfImprovement", "Motivation"]
    },
    {
        id: 7,
        content: "Our latest product update is live! 🎊\n\nWe've added:\n• Real-time collaboration features\n• Enhanced security protocols\n• Improved mobile experience\n• 50+ bug fixes and performance improvements\n\nThank you to everyone who provided feedback during our beta testing phase. Your input was invaluable! 🙏",
        creator: {
            name: "Amanda Wilson",
            picture: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
            title: "Head of Product",
            company: "InnovateApp",
            location: "Chicago, IL"
        },
        type: "image",
        images: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
        ],
        timestamp: "1d",
        metadata: {
            likes: 234,
            comments: 31,
            shares: 19,
            reactions: {
                like: 190,
                celebrate: 35,
                support: 7,
                love: 2,
                insightful: 0,
                funny: 0
            }
        },
        hashtags: ["ProductUpdate", "Innovation", "TechNews"]
    },
    {
        id: 8,
        content: "Mentorship changed my career trajectory. Now I'm paying it forward. 🌟\n\nI'm looking to mentor 3 junior developers this quarter. If you're:\n• Early in your career (0-2 years experience)\n• Passionate about web development\n• Looking for guidance on career growth\n\nLet's connect! I'd love to help you navigate your journey in tech.",
        creator: {
            name: "James Anderson",
            picture: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
            title: "Senior Software Engineer",
            company: "TechStart",
            location: "Denver, CO"
        },
        type: "text",
        timestamp: "2d",
        metadata: {
            likes: 412,
            comments: 156,
            shares: 78,
            reactions: {
                like: 320,
                celebrate: 60,
                support: 25,
                love: 5,
                insightful: 2,
                funny: 0
            }
        },
        hashtags: ["Mentorship", "CareerAdvice", "TechCommunity", "GivingBack"]
    },
    {
        id: 9,
        content: "Behind the scenes of our latest project launch! 📸\n\nFrom initial concept to final deployment, here's a glimpse into our process. The team worked tirelessly to bring this vision to life, and I couldn't be prouder of what we've accomplished together.",
        creator: {
            name: "Lisa Park",
            picture: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
            title: "Creative Director",
            company: "Design Studio Pro",
            location: "Portland, OR"
        },
        type: "image",
        images: [
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
        ],
        timestamp: "4h",
        metadata: {
            likes: 289,
            comments: 23,
            shares: 12,
            reactions: {
                like: 240,
                celebrate: 35,
                support: 10,
                love: 4,
                insightful: 0,
                funny: 0
            }
        },
        hashtags: ["BehindTheScenes", "TeamWork", "ProjectLaunch"]
    },
    {
        id: 10,
        content: "Failure is just feedback in disguise. 💪\n\nLast month, a project I was leading didn't go as planned. Instead of seeing it as a setback, I chose to see it as a learning opportunity.\n\nHere's what I learned:\n• Communication is key at every stage\n• Assumptions are dangerous - always validate\n• Failure teaches you what success never could\n\nWhat's the biggest lesson you've learned from a 'failure'?",
        creator: {
            name: "Thomas Brown",
            picture: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
            title: "Project Manager",
            company: "Agile Solutions",
            location: "Miami, FL"
        },
        type: "text",
        timestamp: "6h",
        metadata: {
            likes: 567,
            comments: 89,
            shares: 134,
            reactions: {
                like: 450,
                celebrate: 50,
                support: 55,
                love: 10,
                insightful: 2,
                funny: 0
            }
        },
        hashtags: ["Leadership", "GrowthMindset", "LessonsLearned", "Resilience"]
    }
]