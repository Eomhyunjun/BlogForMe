
function pageScroll(left) {
    window.addEventListener('scroll', handleScroll);

    const handleScroll = () => {
      setLeft(left - window.scrollX);
    };

    return left;
}

export default pageScroll;
