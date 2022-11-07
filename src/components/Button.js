import { memo, useEffect, useState } from "react";

const Button = ({text, handleClick}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Button has been rendered');
    });

    // const handleClick = () => {
    //     alert('I have been clicked');
    //     setCount(prev => prev + 1);
    // };

    return (
        <button onClick={handleClick}>
            Click {text} {count}
        </button>
    );
};

export default memo(Button);