# Project personal web
this is personal website example 


## Usage/Examples

```javascript
document.addEventListener('DOMContentLoaded', () => {
        const Hamburger = document.getElementById('Hamburger');
        const navList = document.querySelector('.nav-list');
    
        Hamburger.addEventListener('click', () => {
            navList.classList.toggle('open');
            Hamburger.classList.toggle('open');
        });
    });
```
