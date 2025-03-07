// NEED TO CREATE EDIT BUTTON FOR POSTS, UPDATE PROFILE PAGE WHEN IT'S CONNECTED TO SERVER, AND THEN
// UPDATE CSS TO MAKE IT LOOK GREAT!! 


import express from "express";
import path from 'path';
import multer from 'multer';

// Set up multer storage for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads'); // Define the folder to store images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save file with a timestamp to avoid name conflicts
  }
});

const upload = multer({ storage: storage });

// Use import.meta.url to get the directory name equivalent to __dirname
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

/* This renders the home page "/" index.ejs*/
app.get("/", (req, res) => {
  res.render("index.ejs", {posts: blogPosts});
});

/* This makes sure that static files are linked to and the CSS shows up.*/ 
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* This adds the routes to handle the render of the profile and new-post pages.*/
  app.get("/profile", (req, res) => {
    res.render("profile.ejs");
  });
  
  app.get("/new-post", (req, res) => {
    res.render("new-post.ejs");
  });

/* I NEED TO ADD SECTION THAT POSTS OR GETS POST FROM NEW-POST SECTION INTO THE HOME PAGE.*/
// This is TEST to show example blog posts in home page. 
const blogPosts = [
  {
    title: "The Power of Consistency in Achieving Goals",
    content: `
    <p>Achieving long-term goals requires consistency more than anything else. Whether it’s building a new skill, maintaining a fitness routine, or advancing in your career, progress comes from small, consistent efforts over time.</p>
    <p>Success is rarely the result of one big leap; instead, it’s about showing up every day, doing the work, and making incremental improvements. The key to staying consistent is setting realistic, achievable goals that align with your values.</p>
    <p>When the work becomes part of your daily routine, it no longer feels like a chore, but a natural progression towards your dreams.</p>
    <p>Tip: Break your goals into smaller, manageable steps and celebrate the small wins along the way. They’ll add up to big changes in the long run.</p>
  `,
  author: "Park Bennon",
    date: "February 5, 2025"
  },
  {
    title: "5 Tips for Staying Productive While Working from Home",
    content: `
    <p>Working from home can be both a blessing and a challenge. While it offers flexibility and comfort, it also requires discipline and focus. Staying productive in a home environment requires creating a balance between work and relaxation.</p>
    <p>Here are 5 tips to help you stay on track while working remotely:</p>
    <ol>
    <li>Set Up a Dedicated Workspace: Designate a specific area for work, even if it’s just a corner of a room. This helps create a mental boundary between work and home life.</li>
    <li>Stick to a Routine: Establish a set work schedule. Start your day at the same time, take regular breaks, and avoid the temptation to nap or work in an unstructured manner.</li>
    <li>Use Time Blocks: Break your work into chunks of time. Use techniques like the Pomodoro method to stay focused and reduce burnout.</li>
    <li>Minimize Distractions: Turn off notifications on your phone and computer, and let those around you know your work hours to reduce interruptions.</li>
    <li>Prioritize Self-Care: Schedule time for physical activity, hobbies, and socializing. A balanced life boosts productivity and prevents burnout.</li>
    </ol>
    <p>By applying these tips, you can stay productive while maintaining a healthy work-life balance at home.</p>
    <p>Tip: Break your goals into smaller, manageable steps and celebrate the small wins along the way. They’ll add up to big changes in the long run.</p>
  `,
    author: "Katie Murphy",
    date: "February 12, 2025"
  }
];

// Handle the 'New Post' form submission
app.post("/new-post", upload.single('image'), (req, res) => {
  console.log('Form data received:', req.body);
  console.log('Uploaded file:', req.file);

  const { title, content } = req.body;
  const image = req.file ? '/uploads/' + req.file.filename : null; // Store image path

  // Add the new post to the blogPosts array
  const newPost = {
    title: title,
    content: content,
    author: "Your Name", // Replace with a dynamic value if I want
    date: new Date().toISOString().split('T')[0], // Date in YYYY-MM-DD format
    image: image // Add image path if image is uploaded
  };

  blogPosts.push(newPost);

  console.log(blogPosts);

// Handle the delete post action
app.post("/delete-post/:id", (req, res) => {
  const postId = req.params.id; // Get the index of the post to delete
  blogPosts.splice(postId, 1);  // Remove the post from the array
});

  // Redirect back to home page after posting
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});