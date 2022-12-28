import { useEffect, useState } from 'react'

// if we dont need to return any jsx from a component then we might not need to imprt react as well

const Route = ({path, children}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(()=> {
        const onLocationChange = () => {
            // console.log('loc change')
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', onLocationChange);

        return ()=> {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []);

  return (
    // window.location.pathname === path ? children : null
    currentPath === path ? children : null
  )
}

export default Route