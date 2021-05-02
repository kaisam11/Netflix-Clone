import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Background, Container, Logo, ButtonLink, Feature, Text, FeatureCallOut, Link, Group, Picture, Profile, Dropdown, Search, SearchIcon, SearchInput, PlayButton } from './styles/header'

export default function Header({ bg = true, children, ...props }) {

    return bg ? <Background {...props}>{children}</Background> : children
}

Header.Feature = function HeaderFeature({ children, ...props }) {
    return <Feature {...props}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...props }) {
    return <FeatureCallOut {...props}>{children}</FeatureCallOut>
}

Header.Text = function HeaderText({ children, ...props }) {
    return <Text {...props}>{children}</Text>
}

Header.TextLink = function HeaderTextLink({ children, ...props }) {
    return <Link {...props}>{children}</Link>
}

Header.Frame = function HeaderFrame({ children }) {
    return <Container>{children}</Container>
}

Header.Group = function HeaderGroup({ children }) {
    return <Group>{children}</Group>
}

Header.Logo = function HeaderLogo({ to, ...props }) {
    return <ReactRouterLink to={to}>
        <Logo {...props} />
    </ReactRouterLink>
}


Header.ButtonLink = function HeaderButtonLink({ children, ...props }) {
    return <ButtonLink {...props}>{children}</ButtonLink>;
};

Header.Picture = function HeaderPicture({ src, ...props }) {
    return <Picture {...props} src={`/images/users/${src}.png`} />
}

Header.Profile = function HeaderProfile({ children, ...props }) {
    return <Profile {...props}>{children}</Profile>;
};

Header.Dropdown = function HeaderDropdown({ children, ...props }) {
    return <Dropdown {...props}>{children}</Dropdown>;
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...props }) {
    const [searchActive, setSearchActive] = React.useState(false)

    return (
        <Search {...props}>
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
                <img src="/images/icons/search.png" alt='Search' />
            </SearchIcon>
            <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Search...' active={searchActive}
            />
        </Search>
    )
};

Header.PlayButton = function HeaderPlayButton({children}) {
    return <PlayButton>{children}</PlayButton>
}
