let isPremium = false;

const Premium = () =>
{   
    return <h2 className="premium"> 
            {isPremium 
            ? "Thank you for being a premium member!" 
            : "Upgrade to premium to enjoy exclusive features!"} 
            </h2>;
}

export default Premium;