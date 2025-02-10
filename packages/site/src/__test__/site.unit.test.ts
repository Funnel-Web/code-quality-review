import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import Welcome from '../components/Welcome.astro';

describe('Welcome component test', () => {
    it('should render the welcome message', async () => {
        const container = await AstroContainer.create() as AstroContainer;
        const welcome = await container.renderToString(Welcome) as string;
        expect(welcome).toContain('To get started');
    });
});