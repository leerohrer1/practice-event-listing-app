# Practice Project Assignment: NextEvents - A Simple Event Listing App

## Objective

Build a basic event listing app using Next.js 13 App Router, React components, dynamic routing, styling, and navigation — similar to the course, but with different data and structure to reinforce your understanding.

## Project Overview

You will build **NextEvents**, a web app for browsing upcoming workshops. The app will include:

- A homepage
- A page listing all workshops
<!-- - A dynamic route for individual workshop details -->
- A filtered view by month and year
- A general layout with shared navigation
- Static dummy data for the events
- Basic styling

## Assignment Steps

**Module Intro & Planning**  
Sketch or write down a rough plan for your app structure. Determine what pages and components you will need.

**Main Pages Setup**  
Create the following pages:
- `/`
- `/workshops`
- `/workshops/[...slug]`
- A custom 404 page

**Dummy Data & Static Files**  
Create a JavaScript file that exports an array of dummy workshop data. Each event should include: `id`, `title`, `description`, `location`, and `date`. Optionally, add images in the `/public/images` directory.

**React Components**  
Build a `WorkshopItem` component for individual events and a `WorkshopList` component to render a list of items.

**Connecting Components**  
Display the list of workshops on the `/workshops` page using your dummy data and components.

**Styling**  
Apply styling using CSS Modules or Tailwind CSS (if preferred). Style elements such as list items, buttons, and layout structure.

**Next.js Navigation**  
Replace all `<a>` tags with Next.js `<Link>` components for internal navigation between pages.

**Buttons & Icons**  
Add an "Explore" button to each workshop card. Include a basic SVG icon next to the event's location.

**Dynamic Route (Detail Page)**  
Create the `/workshops/[eventId]` page using dynamic routing to show event details from the dummy data.

**Layout Wrapper**  
Create a shared `Layout` component with a header. Use it across all pages for consistent structure.

**All Events Page**  
Ensure the `/workshops` page shows all events without any filtering.

**Filter Form**  
Create a form with dropdowns to filter events by year and month.

**Filtered Events Page**  
Use programmatic navigation (e.g., `router.push()`) to redirect to `/workshops/[year]/[month]` based on form input.

**Catch-All Page**  
Implement a `[...slug].js` file to handle the dynamic filtering route. Display an appropriate message if no events match the selected year and month.

**Final Touches**  
Test the navigation and handle edge cases, such as no events found for the selected filter criteria.

Bonus Challenges (Optional)
Add a search bar to filter workshops by keyword.

Add pagination if more than X workshops exist.

Use getStaticProps or getServerSideProps (if not already used).

Animate page transitions or loading states.
