export interface Testimonial {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };

}

export const testimonials: Testimonial[] = [
  {
    quote: "I've been using the communication tools from this company for several months now, and I'm blown away by how much they've improved our workflow.",
    author: {
      name: "Sarah Chen",
      role: "Head of Product, Stellar",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=250&h=250&auto=format&fit=crop",
    },
  },
  {
    quote: "The level of customer support and the intuitive nature of their products have significantly enhanced our team's productivity.",
    author: {
      name: "Michael Torres",
      role: "CTO, Innovate Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&auto=format&fit=crop",
    },
  },
  {
    quote: "Implementing their solutions has led to a 40% increase in our team's efficiency. The ROI has been remarkable.",
    author: {
      name: "Emily Zhang",
      role: "Operations Director, TechFlow",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&h=250&auto=format&fit=crop",
    },
  },
]; 