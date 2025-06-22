Multi-Level Referral and Earning System with Live Data Updates

Profit Distribution Logic:
1. Direct Earnings:
○ The parent user earns 5% of the profit from their direct referrals (Level 1 users).
2. Indirect Earnings:
○ The parent user earns 1% of the profit made by their direct referrals fromsecond-level users (Level 2).
3. Profit Conditions:
○ Earnings apply only when a purchase exceeds 1000Rs.
○ Profits are calculated and updated in real-time.


System Architecture:
● Design and implement a multi-level referral hierarchy with a limit of 8 direct referrals per user.
● Develop scalable logic for profit distribution across multiple levels.

Profit Tracking and Distribution:
● Calculate earnings for:
○ Direct Referrals: 5% of profits from Level 1 users.
○ Indirect Referrals: 1% of profits from Level 2 transactions generated through Level 1 users.
● Exclude profits for purchases below the 1000Rs threshold.

Database Design:
1. Users Database:
○ Store user profiles, referral hierarchies, and levels.
○ Track relationships between users across multiple levels.
2. Earnings Database:
○ Record transactions, percentages, and detailed earnings breakdowns per
user and referral.

Live Data Feed:
● Implement a real-time notification system to deliver live updates for earnings:
○ Parent users can see live earnings updates without refreshing the page or hitting the API.
