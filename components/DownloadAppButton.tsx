import { Button } from '@mui/material';

export default function DownloadAppButton() {
  const handleClick = () => {
    // window.open('https://play.google.com/store/apps/details?id=com.tikcash.dailymoney.rewards.watchvideoearnmoney', '_blank');
  };

  return (
    <Button
      variant="contained"
      size="large"
      onClick={handleClick}
      sx={{
        backgroundColor: '#fff',
        color: '#10b981',
        fontWeight: 700,
        py: 2,
        px: 6,
        '&:hover': { backgroundColor: '#f0f0f0' }
      }}
    >
      Download App
    </Button>
  );
}