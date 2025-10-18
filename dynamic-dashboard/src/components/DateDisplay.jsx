const DateDisplay = () =>
{
    let displayDate = new Date().toLocaleDateString();

    return <h2>{displayDate}</h2>;
}

export default DateDisplay;