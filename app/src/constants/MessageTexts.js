const waitlistMessages = {
  success: {
    heading: "🎉 You’ve officially joined the SplitSavvy waitlist!",
    paragraphs: [
      "We’ll notify you as soon as your invite is ready. In the meantime, sit back and relax — smarter shared living is just around the corner.",
      "🕒 We review all waitlist requests every Monday, so you can expect an update within a week.",
      {
        text: "🔍 Want to track your status?",
        linkText: "Click here",
        href: "/waitlistcheck",
      },
    ],
  },
  already: {
    heading: "You’re Already on the List!",
    paragraphs: [
      "Looks like you’ve already joined the waitlist. Your request is currently under review — check back soon or track your status.",
      {
        text: "🤔 Think we made a mistake?",
        linkText: "Write to us",
        href: "mailto:xyz@xyz.com",
      },
      {
        text: "🔍 Want to track your status?",
        linkText: "Click here",
        href: "/waitlistcheck",
      },
    ],
  },
  user: {
    heading: "You’re already a verified SplitSavvy user!",
    paragraphs: [
      "It looks like you've already completed the onboarding. You can log in directly and start using all the features of SplitSavvy.",
      {
        text: "Think we made a mistake?",
        linkText: "support@splitsavvy.com",
        href: "mailto:support@splitsavvy.com",
      },
      {
        text: "👤 Already a user?",
        linkText: "Log in here",
        href: "/login",
      },
    ],
  },
  notfound: {
    heading: "Hmm... You're Not on the Waitlist",
    paragraphs: [
      "Looks like we couldn't find your email in our waitlist records. Make sure you entered it correctly or try signing up again.",
      {
        text: "Still having trouble?",
        linkText: "help@splitsavvy.in",
        href: "mailto:help@splitsavvy.in",
      },
    ],
  },
  status: {
    heading: "Your Waitlist Status",
    paragraphs: [
      "We review all waitlist requests every Monday, so you can expect an update within a week.",
      "Here’s your current waitlist status. We’ll notify you as soon as you move forward in the queue.",
    ],
  },
  loginNotFound: {
    heading: "Oops! You’re not on the list.",
    paragraphs: [
      "SplitSavvy is currently invite-only. You’ll need to join the waitlist before you can log in.",
      {
        text: "Entered the wrong email address?",
        href: "/login",
        linkText: "Go back and try again",
      },
      {
        text: "Think we made a mistake?",
        href: "mailto:support@splitsavvy.in",
        linkText: "Contact us",
      },
    ],
  },
};

export default waitlistMessages;
