import React from 'react';

function page() {
    return (
        <div>
            <header style={styles.header}>
                <h1>About Us</h1>
            </header>

            <div style={styles.container}>
                <div style={styles.teamMember}>
                    <h2>John Doe</h2>
                    <p>
                        John Doe is the CEO of our company. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed at lacinia magna. Donec sed purus
                        id justo sagittis volutpat. Nulla facilisi. Nam nec sem sed purus
                        convallis tristique. Nullam nec nisi massa.
                    </p>
                </div>

                <div style={styles.teamMember}>
                    <h2>Jane Smith</h2>
                    <p>
                        Jane Smith is our lead developer. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed at lacinia magna. Donec sed purus
                        id justo sagittis volutpat. Nulla facilisi. Nam nec sem sed purus
                        convallis tristique. Nullam nec nisi massa.
                    </p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    header: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
    },
    container: {
        maxWidth: '800px',
        margin: '20px auto',
        padding: '0 20px',
    },
    teamMember: {
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
    },
};

export default page;
