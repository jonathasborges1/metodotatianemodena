import React from 'react';

type Props = {
  thumbnailUrl: string;
  onClick?: () => void;
};

const FakeVideo: React.FC<Props> = ({ thumbnailUrl, onClick }) => {
  return (
    <div style={{ position: 'relative', width: '400px', height: '225px' }}>
      <img src={thumbnailUrl} alt='thumbnailUrl' style={{ width: '100%', height: 'auto' }} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <button onClick={onClick} style={{ border: 'none', background: 'none' }}>
          <svg viewBox="0 0 100 100" style={{ width: '50px', height: '50px' }}>
            <circle cx="50" cy="50" r="40" fill="none" stroke="#fff" strokeWidth="8" />
            <polygon points="40,30 70,50 40,70" fill="#fff" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FakeVideo;