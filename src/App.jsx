import { useState } from 'react'

const INSTALL_CMD =
  'curl -fsSL https://raw.githubusercontent.com/0Armaan025/3d-creator/main/install.sh | bash'

const REPO_URL = 'https://github.com/0Armaan025/3d-creator'

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false)

  function doCopy() {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button className="copy-btn" onClick={doCopy}>
      {copied ? 'copied' : 'copy'}
    </button>
  )
}

function App() {
  return (
    <div className="page">
      <pre className="ascii">
        {`
 _____     _                    _             
|____ |   | |                  | |            
    / /  __| |     ___ _ __ ___ __ _| |_ ___  _ __
    \\ \\ / _\` |    / __| '__/ _ \\/ _\` | __/ _ \\| '__|
.___/ / (_| |   | (__| | |  __/ (_| | || (_) | |
\\____/ \\__,_|    \\___|_|  \\___|\\__,_|\\__\\___/|_|
`}
      </pre>

      <p className="tagline">
        a project generator for C++ / SDL2 / OpenGL 3.3 games. one command,
        a rotating cube, and you're building.
      </p>

      <hr />

      <h2># install</h2>
      <div className="cmdline">
        <span className="prompt">$</span>
        <code>{INSTALL_CMD}</code>
        <CopyBtn text={INSTALL_CMD} />
      </div>
      <p className="note">
        works on ubuntu / debian. needs g++, make, sdl2, opengl and glm dev
        libs. see the repo README for the full requirements list.
      </p>

      <h2># usage</h2>
      <div className="cmdline">
        <span className="prompt">$</span>
        <code>3d-creator my-game</code>
      </div>
      <div className="cmdline">
        <span className="prompt">$</span>
        <code>cd my-game &amp;&amp; make run</code>
      </div>

      <h2># what you get</h2>
      <ul>
        <li>SDL2 window + OpenGL 3.3 core context, set up right</li>
        <li>GLAD wired in to load GL functions</li>
        <li>GLM for the model / view / projection matrices</li>
        <li>a working shaded, rotating cube example (depth test, delta time, the works)</li>
        <li>a plain Makefile: make / make run / make clean</li>
        <li>code you can actually read, not a framework hiding from you</li>
      </ul>

      <h2># status</h2>
      <p className="note">
        early. basic template only, more templates (fps, empty, engine)
        planned. cross-platform is not there yet, linux first. check the repo
        issues if something's broken. Do ⭐ it on github and feel free to make PRs, or to contribute in any way.
      </p>

      <hr />

      <div className="links">
        <a href={REPO_URL} target="_blank" rel="noreferrer">
          github.com/0Armaan025/3d-creator
        </a>
      </div>

      <p className="footer">no license badges, no newsletter, just a repo. MIT licensed.</p>
    </div>
  )
}

export default App
