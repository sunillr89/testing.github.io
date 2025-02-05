function spaceHtml(target, whitespace) {
    const space = target.querySelectorAll('.whitespace');
    if (space.length && whitespace)
        space.forEach(item => item.outerHTML = ' ');
}

function charInit(target) {
    target.el.classList.add('dsn-chars-wrapper');
    // words
    target.chars.forEach(function(item) {
        item.setProperty("style", "--char-dsn-index:1");
    });
}

export const splittingChar = (target, whitespace = true) => {
    if (!target) return;
    const el = Splitting({
        target: target,
        whitespace: false
    })[0];
    spaceHtml(target, whitespace);
    return el;
}

export const splittingWords = (target, whitespace = true) => {
    if (!target) return;

    const el = Splitting({
        target: target,
        by: 'words'
    })[0];
    spaceHtml(target, whitespace);

    return el;
}

export const splittingLine = (target, whitespace = true) => {
    if (!target) return;

    const el = Splitting({
        target: target,
        by: 'lines'
    })[0];
    spaceHtml(target, whitespace);
    return el;
}

export const splittingItems = (target, matching = null) => {
    if (!target) return;

    return Splitting({
        target,
        by: 'items',
        matching
    });
}
export const splittingGrid = (target, matching = null) => {
    if (!target) return;

    return Splitting({
        target,
        by: 'grid',
        matching
    });
}


const dsnSplitting = {
    Char: splittingChar,
    Words: splittingWords,
    Lines: splittingLine,
    Items: splittingItems,
    Grid: splittingGrid,
}

export default dsnSplitting;