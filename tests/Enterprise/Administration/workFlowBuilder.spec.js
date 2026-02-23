import { test, expect } from '../../../fixtures/enterpriseFixtures.js';
import { WorkFlowBuilderPage } from '../../../pageObjects/enterprise/administrationFG/workFlowBuilder.po.js';
import { getRandomNumber } from '../../../utils/randomNumber.js';

let automatedWorkflowName = `Auto${getRandomNumber(1, 10000)}`;
let assignmentDelayDigit = `${getRandomNumber(1, 9)}`;
let mustCompleteWithinDigit = `${getRandomNumber(1, 9)}`;

test.skip('Add/Delete New Workflow validation', async ({ authenticatedPage }) => {
  const page = authenticatedPage;
  const workFlowBuilderPage = new WorkFlowBuilderPage(page);

  // Navigate to Workflow Builder page
  await workFlowBuilderPage.navigateToWorkflowBuilder();

  // Verify Apply button is visible and is button type
  const applyButton = await workFlowBuilderPage.verifyApplyButton();
  await expect(applyButton).toBeVisible();
  await expect(applyButton).toHaveAttribute('type', 'button');

  // Verify Clear button is visible and is submit type
  const clearButton = await workFlowBuilderPage.verifyClearButton();
  await expect(clearButton).toBeVisible();
  await expect(clearButton).toHaveAttribute('type', 'submit');

  // Verify Add new workflow grid button is visible
  const addNewWorkflowGridButton = await workFlowBuilderPage.verifyAddNewWorkflowGridButton();
  await expect(addNewWorkflowGridButton).toBeVisible();

  // Verify All Work Flows header is visible
  const allWorkFlowsHeader = await workFlowBuilderPage.verifyAllWorkFlowsHeader();
  await expect(allWorkFlowsHeader).toBeVisible();

  // Verify Options grid column header is visible
  const optionsGridColumnHeader = await workFlowBuilderPage.verifyOptionsGridColumnHeader();
  await expect(optionsGridColumnHeader).toBeVisible();

  // Verify Notifications grid column header is visible
  const notificationsGridColumnHeader =
    await workFlowBuilderPage.verifyNotificationsGridColumnHeader();
  await expect(notificationsGridColumnHeader).toBeVisible();

  // Verify Owner grid column header is visible
  const ownerGridColumnHeader = await workFlowBuilderPage.verifyOwnerGridColumnHeader();
  await expect(ownerGridColumnHeader).toBeVisible();

  // Verify Action Title grid column header is visible
  const actionGridColumnHeader = await workFlowBuilderPage.verifyActionGridColumnHeader();
  await expect(actionGridColumnHeader).toBeVisible();

  // Verify Job Loss Categories header is visible
  const jobLossCategoriesHeader = await workFlowBuilderPage.verifyJobLossCategoriesHeader();
  await expect(jobLossCategoriesHeader).toBeVisible();
});
