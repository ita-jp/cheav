import {useState} from 'react';
import axios from 'axios';

const HelloComponent = () => {
    const [message, setMessage] = useState<string>('');

    // Function to fetch data from the /hello API
    const fetchMessage = async () => {
        try {
            const response = await axios.get('http://localhost:8080/hello', {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            setMessage(response.data); // Assuming the response has a message field
        } catch (error) {
            console.error('Failed to fetch data:', error);
            setMessage('Failed to load message');
        }
    };

    return (
        <div>
            <button onClick={fetchMessage}>Get Message</button>
            <p>{message}</p> {/* Display the message below the button */}
        </div>
    );
};

export default HelloComponent;
