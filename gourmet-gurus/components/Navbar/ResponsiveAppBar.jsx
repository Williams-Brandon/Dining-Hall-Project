'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link'
import '@fontsource-variable/noto-sans-lisu';






const pages = ['About', 'Favorites', 'Cart'];
const settings = ['Profile', 'Logout'];
const isUserLoggedIn = true;

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Noto Sans Lisu Variable',
                            fontWeight: 1000,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >

                        <LocalDiningIcon className='mr-4 mt-1' />
                        GOURMET GURUS
                    </Typography>

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} >
                                    <Typography textAlign="center" onClick={handleCloseNavMenu}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                    <LocalDiningIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        GOURMET GURUS
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* This box is necessary for creating empty middle in the navbar/ appbar */}
                    </Box>

                    <Link href={'/bookmarks'}>
                        <Tooltip title='Bookmarks'>
                            <BookmarksIcon className='mr-5' />

                        </Tooltip>
                    </Link>
                    <Link href={'/cart'}>
                        <Tooltip title='Cart'>
                            <ShoppingCartIcon className='mr-5' />
                        </Tooltip>
                    </Link>

                    {(isUserLoggedIn) ? (
                        <Link href={'/logout'}>
                            <Tooltip title="Logout">
                                <LogoutIcon onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                </LogoutIcon>
                            </Tooltip>
                        </Link>
                    ) : (
                        <Link href={'/login'}>
                            <Tooltip title="Login">
                                <LoginIcon onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                </LoginIcon>
                            </Tooltip>
                        </Link>
                    )}



                </Toolbar>
            </Container >
        </AppBar >
    );
}
export default ResponsiveAppBar;