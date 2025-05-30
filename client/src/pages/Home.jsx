/* main home page of the application */

import AddReviewCard from "../components/AddReviewCard";
import Layout from "../components/Layout";
import ReviewCard from "../components/ReviewCard";
import "../styles/home.css"; // Import styles for the home page

function Home() {
    return (
        <Layout title="Your Private Review Space">
            <div class="home-page">
                <p>Search Bar</p>
                <div className="card-grid">
                    <AddReviewCard />
                    <ReviewCard 
                        title="Sample Review 1" 
                        image="https://totallystockport.co.uk/wp-content/uploads/2022/11/Screenshot-2022-11-21-at-09.57.04.png" 
                        rating={4} 
                        reviewPreview="This is a preview of the first review."
                    />
                    <ReviewCard 
                        title="Sample Review 2" 
                        image="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Consumer-Laptop-Go-3-Platinum-001:VP1-539x440" 
                        rating={5} 
                        reviewPreview="This is a preview of the second review."
                    />
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                    <ReviewCard/>
                </div>
            </div>
        </Layout>
    );
}

export default Home;