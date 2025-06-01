import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material'
import React, { useState } from 'react'

const SelectForm = () => {
  const [language, setLanguage] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSubmit = () => {
    setSelectedLanguage(language);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Typography variant="h4" component="h4" sx={{ mt: 4 }}>
        Select Form
      </Typography>
      <Paper elevation={3} sx={{ mt: 8, p: 4, width: '100%', maxWidth: 500 }}>
        <Typography variant="h5" component="h5">
          Choose language
        </Typography>
        <Divider sx={{ my: 2 }} />
        <FormControl fullWidth>
          <InputLabel id="language-select-label">Language</InputLabel>
          <Select
            labelId="language-select-label"
            id="language-select"
            value={language}
            label="Language"
            onChange={handleChange}
          >
            <MenuItem value="Arabic">Arabic</MenuItem>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="French">French</MenuItem>
          </Select>
        </FormControl>
        <Divider sx={{ my: 2 }} />
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          sx={{ mt: 2, borderRadius: '16px' }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Typography variant="body1" component="p" sx={{ mt: 2 }}>
          Selected Language: {selectedLanguage}
        </Typography>   
      </Paper>
    </Box>
  )
}

export default SelectForm