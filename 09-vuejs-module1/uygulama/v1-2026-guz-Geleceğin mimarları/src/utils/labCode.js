// ?raw importları Vite'ın kaynak dosyalarını metin olarak okumasını sağlar.
import mainRaw from '../main.js?raw'
import appRaw from '../App.vue?raw'
import indexRaw from '../../index.html?raw'
import packageRaw from '../../package.json?raw'
import sideRaw from '../components/AppSidebar.vue?raw'
import courseRaw from '../components/CourseCard.vue?raw'
import taskRaw from '../components/TaskRow.vue?raw'
import panelRaw from '../components/BasePanel.vue?raw'
import scheduleRaw from '../components/ScheduleWeek.vue?raw'
import playgroundRaw from '../components/TemplatePlayground.vue?raw'
export const sourceFiles={
  'src/main.js':mainRaw,'src/App.vue':appRaw,'index.html':indexRaw,'package.json':packageRaw,
  'src/components/AppSidebar.vue':sideRaw,'src/components/CourseCard.vue':courseRaw,
  'src/components/TaskRow.vue':taskRaw,'src/components/BasePanel.vue':panelRaw,
  'src/components/ScheduleWeek.vue':scheduleRaw,
  'src/components/TemplatePlayground.vue':playgroundRaw
}
export function codeFor(file,marker=null,snippet=null){
  if(snippet)return snippet
  const raw=sourceFiles[file]
  if(!raw)return `// ${file} bulunamadı`
  if(!marker)return raw.trim().split('\n').slice(0,54).join('\n')
  const startToken=`@lab:${marker}:start`, endToken=`@lab:${marker}:end`
  const start=raw.indexOf(startToken),end=raw.indexOf(endToken,start)
  if(start<0||end<0)return `// ${marker} kod aralığı bulunamadı`
  return raw.slice(start+startToken.length,end).replace(/^\s*-->/,'').replace(/<!--\s*$/,'').trim()
}
