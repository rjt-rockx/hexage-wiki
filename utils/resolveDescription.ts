import { createMarkdownRenderer } from 'vitepress'
const renderer = await createMarkdownRenderer('', { breaks: true })

type DescribedEntity = {
  description: string
}

type KeyResolver = (value: number) => string

export const resolveDescription = <T extends DescribedEntity>(
  item: T,
  upgrade: 1 | 2 | 3 = 1,
  keyResolver: KeyResolver = (value: number) => `upgrade_${value}_values`
) => {
  if (upgrade < 1 || upgrade > 3) throw new Error('Invalid upgrade level')
  const values = item[keyResolver(upgrade)]
  if (typeof values === 'undefined') throw new Error('Invalid upgrade cost or values')
  const splitValues = String(values).split('|')
  let newDescription = item.description
  for (let i = 1; i <= splitValues.length; i++)
    newDescription = newDescription.replace(`{{\$${i}}}`, splitValues[i - 1])
  const rendered = renderer.render(newDescription).replace(/\n$/gim, '')
  return rendered
}

export const resolveAllDescriptions = <T extends DescribedEntity>(item: T) => {
  let descriptions: string[] = []
  for (let i = 1; i <= 3; i++) {
    try {
      let description = resolveDescription(item, i as 1 | 2 | 3)
      if (description === '') continue
      descriptions.push(description)
    } catch {
      continue
    }
  }
  return descriptions
}
